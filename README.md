# **_UML-схема_** сборки приложения

![picture1](https://trello-attachments.s3.amazonaws.com/607a4f1910a1f27254381596/607a520b7cd92579e31ac9c6/cb276a837091193a7a8c20ac9ddceb61/image.png)

| zagolovok1 | zagolovok | zagolovok |
| :--------- | :-------: | --------: |
| s3         |    s2     |        s2 |
| s3         |    s1     |        s1 |

[**Edit on StackBlitz** ⚡️](https://stackblitz.com/edit/js-vrmtgq)

@startuml
component Comp3 #palegreen;line:green;line.dashed;text:green {
  package scr
package node_modules
package public
}


cloud Cloud #aliceblue;line:blue;line.dotted;text:blue{
artifact main.chunk.js
artifact "vendor~main.chunk.js" as vendor
artifact manifest.json
artifact favicon.ico
artifact index.html
artifact bandle.js
}

scr -> main.chunk.js
node_modules -> vendor
public -> manifest.json
public -> favicon.ico
public -> index.html
main.chunk.js -> index.html
vendor -> index.html
manifest.json -> index.html
favicon.ico -> index.html
bandle.js -> index.html
@enduml
