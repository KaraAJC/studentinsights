import {
  studentProfile,
  nowMoment,
  currentEducator
} from './fixtures.jsx';
import SpecSugar from '../support/spec_sugar.jsx';
import TakeNotes from '../../../app/assets/javascripts/student_profile/take_notes.jsx';


describe('TakeNotes', function() {
  const merge = window.shared.ReactHelpers.merge;

  const helpers = {
    renderInto: function(el, props) {
      const mergedProps = merge(props || {}, {
        nowMoment: nowMoment,
        eventNoteTypesIndex: studentProfile.eventNoteTypesIndex,
        currentEducator: currentEducator,
        onSave: jasmine.createSpy('onSave'),
        onCancel: jasmine.createSpy('onCancel'),
        requestState: null
      });
      window.ReactDOM.render(<TakeNotes {...mergedProps} />, el);
    }
  };

  SpecSugar.withTestEl('high-level integration tests', function() {
    it('renders note-taking area', function() {
      const el = this.testEl;
      helpers.renderInto(el);

      expect(el).toContainText('February 11, 2016');
      expect(el).toContainText('demo@example.com');
      expect($(el).find('textarea').length).toEqual(1);
      expect($(el).find('.btn.note-type').length).toEqual(6);
      expect($(el).find('.btn.save').length).toEqual(1);
      expect($(el).find('.btn.cancel').length).toEqual(1);
    });
  });
});
