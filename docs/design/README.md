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
- Project - проєкт<br>
    Атрибути:<br>
        name: text - назва проекту<br>
        team: Team - команда, яка прив'язана до певного проекту<br>
- Team - команда<br>
    Атрибути:<br>
        name: text - назва команди<br>
        icon: imageFile - іконка команди<br>
- Member - учасник команди<br>
    Атрибути:<br>
        name: text - назва учасника<br>
- Grant - об'єкт який описує право<br>
- User - користувач<br>
        Атрибути:<br>
            name: text - назва користувача<br>
            password: text - пароль до користувача<br>
- Role - роль в команді. Роль складається із набору грантів<br>
    Атрибути:<br>
        name: text - назва ролі<br>
- Action - дія<br>
    Атрибути:<br>
        name: text - назва дії<br>
        date: date - дата дії<br>
        type: text - тип дії<br>
- State - журнал виконаних дій<br>
- Task - завдання<br>
    Атрибути:<br>
        name: text - назва завдання<br>
        deadline: date - дедлайн завдання<br>
        responsible: Member - відповідальний<br>учасник за завдання
        status: text - статус виконання завдання<br>
- Artefact - артефакт<br>
    Атрибути:<br>
        name: text - назва артефакту<br>
        link: text - лінк на артефакт<br>

Головною сутністю є проєкт. До проєкту прив'язана 1 і тільки 1 команда, також у проєкті можна створювати безліч завдань.<br>
За кожним завданням закріплена невизначена кількість артефактів.<br>
Команда складається з 1 чи більше учасників, при цьому кожен з них є користуачем СУП. У той же час один користувач може бути учасником багатьох команд.<br>
Грант це об'єкт, що описує право на якусь дію напрямлену на менеджемент проєкту, завдання чи команди. Кожному завданню можуть відповідати багато грантів, так само як і проєкту, команді, але в моделі не позначені зв'язки гранту з командою та проєктом, так як вони в межах одного проєкту завжди виступають в єдиному екземплярі. Гранти прив'язані до конкретних учасника та дії.<br>
Роль може бути присвоєна учаснику, але не напряму, а як набір грантів.<br>
Дії запусуються у журнал виконаних дій.



