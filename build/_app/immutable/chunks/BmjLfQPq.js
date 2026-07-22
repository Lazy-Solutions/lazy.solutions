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
title: Why We Use Partial Classes When Building Unity Tools\r
target: unity partial classes\r
date: 2026-07-22\r
description: Learn why we use partial classes when building Unity tools and how they help organize large C# systems into maintainable, easy to navigate code.\r
image: partial-classes.webp\r
published: true\r
---\r
\r
We use partial classes extensively when building our Unity tools. If you've explored the source code of Advanced Scene Manager, you've probably noticed that many of its larger types are split across multiple files. \r
\r
In this article, we'll explain what partial classes are, why we use them, and how they've become an important part of the way we build Unity tools.\r
\r
## What Are Partial Classes?\r
\r
Partial classes is a C# feature that allows a single class to be split across multiple files.\r
\r
Lets take a GameManager class for example.\r
\r
Imagine you have \r
\r
\`\`\`csharp\r
public class GameManager : MonoBehaviour\r
{\r
    public GameMode gameMode { get; set; }\r
\r
    void Start() {}\r
\r
    public event Action OnEvent;\r
\r
    static void DoSomething() {}\r
}\r
\`\`\`\r
\r
As the class grows, different parts of the functionality can become harder to navigate.\r
\r
With partial classes, you can split the same class into multiple files:\r
\r
\`\`\`\r
GameManager.cs\r
GameManager.Statics.cs\r
GameManager.Initialization.cs\r
GameManager.Events.cs\r
\`\`\`\r
\r
\`\`\`csharp\r
public partial class GameManager : MonoBehaviour\r
{\r
    public GameMode gameMode { get;set; }\r
}\r
public partial class GameManager : MonoBehaviour\r
{\r
    void Start()\r
    {\r
        Debug.Log($"Current Gamemode: {gameMode}");\r
    }\r
}\r
public partial class GameManager\r
{\r
    static void DoSomething() {}\r
}\r
public partial class GameManager\r
{\r
    public event Action OnEvent;\r
}\r
\`\`\`\r
\r
Although these members live in different files, the compiler combines them into a single GameManager class. Partial classes don't create inheritance or additional objects. They are purely an organizational feature.\r
\r
For a more detailed explanation of partial classes, including how the compiler combines the different parts and additional features such as partial members, see Microsoft's documentation on [Partial Classes and Members](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods).\r
\r
## How Do We Use Partial Classes In Advanced Scene Manager?\r
\r
The previous example was intentionally small. The benefits become much more apparent when building larger Unity tools.\r
\r
Here's how some of the larger classes in Advanced Scene Manager are organized.\r
\r
![Partials files example](/media/blog/partials.webp)\r
\r
As you can see, our core classes are split into several partial files. Runtime is divided into nine files, while SceneOperation is divided into eight. Each partial groups related functionality together, making it much easier to find the code you're looking for.\r
\r
Runtime contains much of the core runtime logic, including scene tracking, loading queues, events, and other systems responsible for managing scenes during play.\r
\r
SceneOperation represents a single scene loading operation. Rather than placing every step of the loading process into one massive source file, each stage is implemented in its own partial.\r
\r
Here's the core execution loop:\r
\r
\`\`\`csharp\r
IEnumerator Run()\r
{\r
\r
    wasCancelled = false;\r
\r
    yield return PrepareForExecution();\r
\r
    if (wasCancelled)\r
        yield break;\r
\r
    yield return ShowLoadingScreen();\r
\r
    yield return CloseScenes();\r
    yield return OpenScenes();\r
    yield return PreloadScenes();\r
\r
    yield return PerformFinalSteps();\r
    yield return HideLoadingScreen();\r
\r
    yield return FinalizeExecution();\r
\r
}\r
\`\`\`\r
\r
The Run() method reads almost like a checklist, while the implementation of each step lives in another partial file dedicated to that area of responsibility. This keeps the main execution flow easy to follow without sacrificing organization.\r
\r
If every loading stage, helper method, callback, and field lived in a single file, SceneOperation would quickly become much harder to navigate. Splitting the class into partials allows us to organize related code without introducing unnecessary classes or abstractions.\r
\r
## How ASM Evolved From Large Scripts\r
\r
Advanced Scene Manager did not start with the architecture it has today. Like many Unity projects, early versions were built around simpler scripts that grew as new features were added.\r
\r
As ASM developed, some of those scripts became difficult to maintain. We experimented with different ways of organizing the code, including using regions to group related functionality inside files.\r
\r
Regions helped separate sections visually, but they had limitations. The code was still contained within the same file, and navigating large systems could become difficult as more features were added.\r
\r
Over time, we started rewriting and restructuring parts of ASM. During that process, partial classes became one of the patterns we adopted to better organize larger systems.\r
\r
Instead of grouping everything inside one file, responsibilities could be separated into dedicated files while still remaining part of the same class.\r
\r
This approach allowed us to keep related functionality together while making each file easier to understand and navigate.\r
\r
## Why We Use Partial Classes Throughout Advanced Scene Manager\r
\r
Today, partial classes are used throughout ASM. Most system classes are split into partial files, while smaller models and simple utility classes usually remain in a single file.\r
\r
We use this approach because Unity tools often grow over time. A class that starts simple can eventually contain editor functionality, runtime logic, events, serialization, and utility methods.\r
\r
By splitting classes from the beginning, we avoid large files becoming difficult to navigate later.\r
\r
## The Drawback Of Partial Classes\r
\r
Partial classes are not without drawbacks.\r
\r
One thing you notice when working with partial classes in Visual Studio is that navigation behaves slightly differently. When using F12 to go to a method or property implementation, Visual Studio may first show a list of all partial files containing that class instead of taking you directly to the implementation.\r
\r
This means you need to know how the class is organized and which partial file contains the code you are looking for.\r
\r
For us, this tradeoff is worth it. The benefit of having related functionality grouped into separate files outweighs the small inconvenience when navigating. However, it is something to keep in mind when deciding how to structure your own classes.\r
\r
## Final Thoughts\r
\r
Partial classes are a small feature, but they have become an important part of how we structure larger Unity tools.\r
\r
They allow us to keep related functionality together while separating different responsibilities into files that are easier to navigate. For us, this has become a practical way to manage the growth of systems like Advanced Scene Manager.\r
\r
If you want to see this approach applied in a production Unity tool, check out Advanced Scene Manager.\r
\r
[Learn more about Advanced Scene Manager](/advanced-scene-manager)`;export{e as n,t};