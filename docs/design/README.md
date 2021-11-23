# Проєктування бази даних

В рамках проекту розробляється: 

- ER-модель

@startuml

    entity Project {
        name: text
        team: Team
    }

    entity Task {
        name: text
        deadline: date
        responsible: Member
        status: text
    }

    entity Team {
        name: text
        icon: imageFile
    }

    entity User {
        name: text
        password: text
    }
    
    entity Member {
        name: text
    }

    entity Role {
        name: text
    }

    entity Action {
        name: text
        date: date
        type: text
    }

    entity Artefact {
        name: text
        link: text
    }
    
    entity Grant {}
    
    entity State {}

    Task "0, *" -- "1,1" Project
    Team "1, 1" -- "0, *" Project
    Member "1, *" -- "1, 1" Team
    Member "0, *" -- "1, 1" User
    Artefact "0, *" -- "1, 1" Task
    Grant "0, *" -- "1, 1" Member
    Grant "1, *" -- "0, 1" Task
    Grant "1, *" -- "0, 1" Role
    Grant "1, *" -- "1, 1" Action
    State "1, 1" -- "0, *" Action

@enduml

Пояснення до **ER-моделі**:

Entities:
- Project - проєкт
- Team - команда
- Member - учасник команди
- Grant - об'єкт який описує право
- User - користувач
- Role - роль в команді. Роль складається із набору грантів
- Action - дія
- State - журнал виконаних дій
- Task - завдання
- Artefact - артефакт

До кожного проєкту прив'язана одна і тільки одна команда також у проєкті можна створювати безліч завдань. У завданні можна побачити артефакти, натиснувши відповідну кнопку. Команда складається з учасників, при цьому кожен з них є користуачем СУП(система управління проєктами). У той же час один користувач може бути учасником багатьох команд. Грант це об'єкт, що описує право на якусь дію напрямлену на проєкт, завдання чи команду. Роль це набір грантів, вона може бути присвоєна учаснику. Дії запусуються у журнал виконаних дій
