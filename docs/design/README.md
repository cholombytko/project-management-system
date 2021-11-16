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
    Grant "0, *" -- "1, *" Member
    Grant "0, *" -- "1, 1" Task
    Grant "0, *" -- "1, 1" Role
    Grant "0, *" -- "1, 1" Action
    Action "1, *" -- "1, 1" Role
    State "1, 1" -- "0, *" Action

@enduml