/**
 * Small, explicit tool surface for an agent. Every side effect is authorized
 * in application code rather than delegated to the model.
 */
export function createLeadTools({ repository, authorize }) {
  return {
    async findLead({ leadId }, context) {
      authorize(context, 'lead:read');
      if (!/^lead_demo_[a-z0-9]+$/.test(leadId)) throw new Error('invalid_lead_id');
      return repository.findLead(leadId);
    },

    async addNote({ leadId, note }, context) {
      authorize(context, 'lead:write');
      if (!/^lead_demo_[a-z0-9]+$/.test(leadId)) throw new Error('invalid_lead_id');
      if (typeof note !== 'string' || note.trim().length < 2 || note.length > 500) {
        throw new Error('invalid_note');
      }
      return repository.addNote({ leadId, note: note.trim() });
    }
  };
}
