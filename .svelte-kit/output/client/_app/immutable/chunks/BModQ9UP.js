var e=`---\r
title: How to Access Internal Classes and Methods in Unity\r
target: how to access internal classes and methods in unity\r
date: 2026-07-20\r
description: Found an internal Unity API you want to use? Learn how bridge classes can safely wrap internal classes and methods while keeping your code maintainable.\r
image: broken-unity.webp\r
published: true\r
---\r
\r
Have you ever inspected a Unity package, or a third party asset, and found an \`internal\` class or method you wished was public?\r
\r
Maybe it does exactly what you need, but trying to access it results in a compiler error.\r
\r
The good news is that you can often work around this by creating a small bridge around the internal API. This lets you keep the internal access isolated while exposing only the functionality your project actually needs.\r
\r
In this article, we'll look at how internal APIs work, how to create a bridge, and how to organize it correctly inside a Unity project.\r
\r
## Why Are Some Unity APIs Internal?\r
\r
In C#, \`internal\` means that a class or method can only be accessed from within the same assembly.\r
\r
A common confusion is thinking this is related to namespaces. It is not.\r
\r
A namespace only organizes your code:\r
\r
\`\`\`csharp\r
namespace MyGame.Inventory\r
{\r
    public class InventoryManager\r
    {\r
    }\r
}\r
\`\`\`\r
\r
Another script can access this class by importing the namespace:\r
\r
\`\`\`csharp\r
using MyGame.Inventory;\r
\`\`\`\r
\r
Access modifiers like \`internal\` work differently. They are based on assemblies, which are the compiled units of your code.\r
\r
In Unity, scripts are compiled into assemblies. By default, most scripts are part of assemblies such as \`Assembly-CSharp\`, but packages and projects can define their own assemblies.\r
\r
Two scripts can share the same namespace and still be unable to access each other if they belong to different assemblies.\r
\r
\`\`\`csharp\r
internal class InventoryManager\r
{\r
    internal void Refresh()\r
    {\r
    }\r
}\r
\`\`\`\r
\r
This class is only available inside its own assembly.\r
\r
This is intentional. Marking APIs as \`internal\` allows developers to hide implementation details while keeping the public API smaller and easier to maintain.\r
\r
## Referencing the Package Assembly\r
\r
Before creating the bridge, your project needs to be able to access the assembly containing the internal API.\r
\r
Unity packages are often compiled into their own assemblies.\r
An Assembly Definition Reference (\`.asmref\`) tells Unity that scripts inside a folder should be compiled as part of another assembly.\r
\r
For example, create a folder for your bridge:\r
\r
\`\`\`\r
Assets/Utilities/SplineBridge/\r
\`\`\`\r
\r
Inside this folder, create an Assembly Definition Reference and point it to the assembly containing the internal API.\r
\r
Now scripts inside this folder will be compiled as part of that assembly, allowing the bridge to access the internal classes and methods provided by the package.\r
\r
## Creating the Bridge\r
\r
Now that the assembly reference is set up, we can create the bridge.\r
\r
A bridge is a small wrapper that exposes the functionality you need while keeping the original internal API access in one place.\r
\r
For this example, we'll use Unity's Splines package.\r
\r
In some Unity versions, \`Spline.SetDirty\` is an internal method. It is useful when modifying splines because it tells Unity that the spline data has changed.\r
\r
A simple bridge could look like this:\r
\r
\`\`\`csharp\r
using UnityEngine.Splines;\r
\r
namespace MyGame.Utilities\r
{\r
    public static class SplineBridge\r
    {\r
        public static void SetDirty(this Spline spline, SplineModification modification = SplineModification.Default, int knotIndex = -1)\r
            => spline.SetDirty(modification, knotIndex);       \r
    }\r
}\r
\`\`\`\r
\r
Adding the bridge to its own namespace is recommended. This avoids naming conflicts with other scripts or packages and makes it clear that this code belongs to your project.\r
\r
Now your project can use:\r
\r
\`\`\`csharp\r
mySpline.SetDirty();\r
\`\`\`\r
\r
Instead of accessing the internal API throughout your project, all internal access is contained inside the bridge.\r
\r
If Unity changes the internal implementation in a future version, you only need to update this one class.\r
\r
## A Note About Internal APIs\r
\r
While accessing internal APIs can be useful, it should not be the first solution you reach for.\r
\r
Public APIs are designed to be supported over time. Internal APIs do not have the same guarantees and can change, be renamed, or be removed between Unity versions.\r
\r
Important: When using bridges in a built player, especially with IL2CPP, these changes can cause runtime issues even if your project still compiles. Always test player builds on target platforms and be prepared to update or remove the bridge when upgrading Unity or packages.\r
\r
However, sometimes an internal API is the only practical solution. In those cases, keeping the access isolated behind a bridge is the safest approach.\r
\r
## Conclusion\r
\r
Internal APIs can unlock functionality that is not currently exposed through Unity's public API.\r
\r
A bridge class gives you access to that functionality while keeping the dependency isolated to one location.\r
\r
Use public APIs whenever possible. When you do need internal access, keep it contained, document why it exists, and be prepared to update it when Unity changes.\r
`,t=`---\r
title: Welcome to the Lazy Solutions Blog\r
target: Unity development resources\r
date: 2026-07-17\r
description: Welcome to the Lazy Solutions blog, where we share Unity development tips and lessons from building professional tools and assets. \r
image: first-post-banner.webp\r
published: true\r
---\r
\r
This is where we will share Unity development insights, articles, and lessons learned while building assets for game developers.\r
\r
## About Lazy Solutions\r
\r
Lazy Solutions creates professional Unity assets designed to solve common development challenges.\r
\r
We focus on building tools that remove repetitive work and help developers spend more time creating their games.\r
\r
## Conclusion\r
\r
This blog is just getting started. We look forward to sharing what we learn while building tools for the Unity community.\r
\r
`;export{e as n,t};