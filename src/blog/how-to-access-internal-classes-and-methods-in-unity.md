---
title: How to Access Internal Classes and Methods in Unity
target: how to access internal classes and methods in unity
date: 2026-07-20
description: Found an internal Unity API you want to use? Learn how bridge classes can safely wrap internal classes and methods while keeping your code maintainable.
image: broken-unity.webp
published: true
---

Have you ever inspected a Unity package, or a third party asset, and found an `internal` class or method you wished was public?

Maybe it does exactly what you need, but trying to access it results in a compiler error.

The good news is that you can often work around this by creating a small bridge around the internal API. This lets you keep the internal access isolated while exposing only the functionality your project actually needs.

In this article, we'll look at how internal APIs work, how to create a bridge, and how to organize it correctly inside a Unity project.

## Why Are Some Unity APIs Internal?

In C#, `internal` means that a class or method can only be accessed from within the same assembly.

A common confusion is thinking this is related to namespaces. It is not.

A namespace only organizes your code:

```csharp
namespace MyGame.Inventory
{
    public class InventoryManager
    {
    }
}
```

Another script can access this class by importing the namespace:

```csharp
using MyGame.Inventory;
```

Access modifiers like `internal` work differently. They are based on assemblies, which are the compiled units of your code.

In Unity, scripts are compiled into assemblies. By default, most scripts are part of assemblies such as `Assembly-CSharp`, but packages and projects can define their own assemblies.

Two scripts can share the same namespace and still be unable to access each other if they belong to different assemblies.

```csharp
internal class InventoryManager
{
    internal void Refresh()
    {
    }
}
```

This class is only available inside its own assembly.

This is intentional. Marking APIs as `internal` allows developers to hide implementation details while keeping the public API smaller and easier to maintain.

## Referencing the Package Assembly

Before creating the bridge, your project needs to be able to access the assembly containing the internal API.

Unity packages are often compiled into their own assemblies.
An Assembly Definition Reference (`.asmref`) tells Unity that scripts inside a folder should be compiled as part of another assembly.

For example, create a folder for your bridge:

```
Assets/Utilities/SplineBridge/
```

Inside this folder, create an Assembly Definition Reference and point it to the assembly containing the internal API.

Now scripts inside this folder will be compiled as part of that assembly, allowing the bridge to access the internal classes and methods provided by the package.

## Creating the Bridge

Now that the assembly reference is set up, we can create the bridge.

A bridge is a small wrapper that exposes the functionality you need while keeping the original internal API access in one place.

For this example, we'll use Unity's Splines package.

In some Unity versions, `Spline.SetDirty` is an internal method. It is useful when modifying splines because it tells Unity that the spline data has changed.

A simple bridge could look like this:

```csharp
using UnityEngine.Splines;

namespace MyGame.Utilities
{
    public static class SplineBridge
    {
        public static void SetDirty(this Spline spline, SplineModification modification = SplineModification.Default, int knotIndex = -1)
            => spline.SetDirty(modification, knotIndex);       
    }
}
```

Adding the bridge to its own namespace is recommended. This avoids naming conflicts with other scripts or packages and makes it clear that this code belongs to your project.

Now your project can use:

```csharp
mySpline.SetDirty();
```

Instead of accessing the internal API throughout your project, all internal access is contained inside the bridge.

If Unity changes the internal implementation in a future version, you only need to update this one class.

## A Note About Internal APIs

While accessing internal APIs can be useful, it should not be the first solution you reach for.

Public APIs are designed to be supported over time. Internal APIs do not have the same guarantees and can change, be renamed, or be removed between Unity versions.

Important: When using bridges in a built player, especially with IL2CPP, these changes can cause runtime issues even if your project still compiles. Always test player builds on target platforms and be prepared to update or remove the bridge when upgrading Unity or packages.

However, sometimes an internal API is the only practical solution. In those cases, keeping the access isolated behind a bridge is the safest approach.

## Conclusion

Internal APIs can unlock functionality that is not currently exposed through Unity's public API.

A bridge class gives you access to that functionality while keeping the dependency isolated to one location.

Use public APIs whenever possible. When you do need internal access, keep it contained, document why it exists, and be prepared to update it when Unity changes.
