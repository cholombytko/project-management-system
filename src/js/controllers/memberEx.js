const { modObj } = require('../api/modObj');

const _member = modObj.member;
const memberEx = {
    async createMember(member) {
        const createdMember = await _member.create(member);
        return createdMember.dataValues.id;
    },

    async receiveMemberById(id) {
        const member = await _member.findByPk(id);
        return member;
    },

    async updateMember(id, member) {
        await _member.update(member, {
            where: { id: id }
        });
    },

    async removeMemberById(id) {
        await _member.destroy({
            where: { id: id }
        });
    },

    async receiveAllMembers() {
        const members = await _member.findAll();
        return members;
    }
}

module.exports = memberEx;