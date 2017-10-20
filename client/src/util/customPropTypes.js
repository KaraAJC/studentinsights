import PropTypes from 'prop-types';

const customPropTypes = {
  actions: PropTypes.shape({
    onColumnClicked: PropTypes.func.isRequired,
    onClickSaveNotes: PropTypes.func.isRequired,
    onClickSaveService: PropTypes.func.isRequired,
    onClickDiscontinueService: PropTypes.func.isRequired
  }),
  requests: PropTypes.shape({
    saveNote: PropTypes.string,
    discontinueService: PropTypes.object
  }),
  api: PropTypes.shape({
    saveNotes: PropTypes.func.isRequired
  }),

  // The feed of all notes and data entered in Student Insights for
  // a student.
  feed: PropTypes.shape({
    event_notes: PropTypes.array.isRequired,
    services: PropTypes.shape({
      active: PropTypes.array.isRequired,
      discontinued: PropTypes.array.isRequired
    }),
    deprecated: PropTypes.shape({
      interventions: PropTypes.array.isRequired
    })
  }),

  history: PropTypes.shape({
    pushState: PropTypes.func.isRequired,
    replaceState: PropTypes.func.isRequired
  })
};

export default customPropTypes;