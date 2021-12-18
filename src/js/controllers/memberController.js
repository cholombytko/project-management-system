const memberEx = require('./memberEx');

const memberController = {
    async createMember(req, res) {
        const name = req.body.name;
        const team = req.body.team;
        const user = req.body.user;

        const newId = await memberEx.createMember({
            name,
            team,
            user
        });

        res.status(201).send(`Member with id (${newId}) was succesfully created`);
    },

    async receiveMemberById(req, res) {
        const id = req.params.id;
        const member = await memberEx.receiveMemberById(id);
        res.status(200).send(member)
    },

    async updateMember(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const team = req.body.decription;
        const user = req.body.user;

        await memberEx.updateMember(id, {
            name,
            team,
            user
        });

        res.status(200).send(`Member with id (${id}) was succesfully updated`);
    },

    async removeMemberById(req, res) {
        const id = req.params.id;
        await memberEx.removeMemberById(id);
        res.status(200).send(`Member with id (${id}) was succesfully removed`);
    },

    async receiveAllMembers(req, res) {
        const members = await memberEx.getAll();
        res.status(200).send(members);
    }
}

module.exports = memberController;