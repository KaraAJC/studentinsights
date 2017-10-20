import React from 'react';
import PropTypes from 'prop-types';
import customPropTypes from '../util/customPropTypes';
import StudentProfileHeader from './StudentProfileHeader.js';

// import merge from '../util/merge.js';
// const BarChartSparkline = window.shared.BarChartSparkline;
// const Sparkline = window.shared.Sparkline;
// const AcademicSummary = window.shared.AcademicSummary;
// const SummaryWithoutSparkline = window.shared.SummaryWithoutSparkline;
// const SummaryList = window.shared.SummaryList;
// const QuadConverter = window.shared.QuadConverter;
// const Scales = window.shared.Scales;

// const StudentProfileHeader = window.shared.StudentProfileHeader;
// const ProfileDetails = window.shared.ProfileDetails;
// const ELADetails = window.shared.ELADetails;
// const MathDetails = window.shared.MathDetails;
// const AttendanceDetails = window.shared.AttendanceDetails;
// const ServicesDetails = window.shared.ServicesDetails;
// const NotesDetails = window.shared.NotesDetails;


class StudentProfilePage extends React.Component {
  dateRange() {
    const nowMoment = this.props.nowMomentFn();
    return [nowMoment.clone().subtract(2, 'year').toDate(), nowMoment.toDate()];
  }

  selectedColumnStyles(columnKey) {
    return (columnKey === this.props.selectedColumnKey) ? styles.selectedColumn : {};
  }

  selectedTabStyles(columnKey) {
    return (columnKey === this.props.selectedColumnKey) ? styles.selectedTab : {};
  }

  onColumnClicked(columnKey) {
    this.props.actions.onColumnClicked(columnKey);
  }

  render() {
    return (
      <div className="StudentProfilePage">
        <StudentProfileHeader student={this.props.student} />
        <div className="summary-container" style={styles.summaryContainer}>
          {/*
          {this.renderProfileColumn()}
          {this.renderELAColumn()}
          {this.renderMathColumn()}
          {this.renderAttendanceColumn()}
          {this.renderInterventionsColumn()}*/}
        </div>
        <div style={styles.detailsContainer}>
          {/* {this.renderSectionDetails()} */}
        </div>
      </div>
    );
  }
}

StudentProfilePage.propTypes = {
  // UI
  selectedColumnKey: PropTypes.string.isRequired,

  // context
  nowMomentFn: PropTypes.func.isRequired,
  currentEducator: PropTypes.object.isRequired,

  // constants
  educatorsIndex: PropTypes.object.isRequired,
  serviceTypesIndex: PropTypes.object.isRequired,
  eventNoteTypesIndex: PropTypes.object.isRequired,

  // data
  student: PropTypes.object.isRequired,
  feed: PropTypes.object.isRequired,
  dibels: PropTypes.array.isRequired,
  chartData: PropTypes.shape({
    // ela
    most_recent_star_reading_percentile: PropTypes.number,
    most_recent_mcas_ela_scaled: PropTypes.number,
    most_recent_mcas_ela_growth: PropTypes.number,
    star_series_reading_percentile: PropTypes.array,
    mcas_series_ela_scaled: PropTypes.array,
    mcas_series_ela_growth: PropTypes.array,
    // math
    most_recent_star_math_percentile: PropTypes.number,
    most_recent_mcas_math_scaled: PropTypes.number,
    most_recent_mcas_math_growth: PropTypes.number,
    star_series_math_percentile: PropTypes.array,
    mcas_series_math_scaled: PropTypes.array,
    mcas_series_math_growth: PropTypes.array
  }),
  attendanceData: PropTypes.shape({
    discipline_incidents: PropTypes.array,
    tardies: PropTypes.array,
    absences: PropTypes.array
  }),

  access: PropTypes.object,
  iepDocument: PropTypes.object,
  sections: PropTypes.array,
  currentEducatorAllowedSections: PropTypes.array,

  // flux-y bits
  requests: customPropTypes.requests,
  actions: customPropTypes.actions
};


// define page component
const styles = {
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
  },
  detailsContainer: {
    margin: 30
  },
  academicColumn: {
    textAlign: 'left',
  },
  profileColumn: {
    background: '#ededed'
  },
  interventionsColumn: {
    background: '#ededed'
  },
  column: {
    flexGrow: '1',
    flexShrink: '0',
    padding: '22px 26px 16px 26px',
    cursor: 'pointer',
    borderColor: 'white',
    borderTop: 0,
    margin: 0,
    borderRadius: '0 0 5px 5px',
    width: '100%'
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 5px 0 0',
    borderRadius: '5px 5px 5px 5px',
    border: '1px solid #ccc',
    width: '20%',
  },
  selectedColumn: {
    borderStyle: 'solid',
    borderColor: '#3177c9',
    borderWidth: '0 5px 5px 5px',
    padding: '22px 21px 11px 21px',
  },
  selectedTab: {
    background: '#3177c9',
    color: 'white',
    borderBottom: 0,
  },
  spedTitle: {
    fontWeight: 'bold',
    fontColor: 'black'
  },
  summaryWrapper: {
    paddingBottom: 10
  },
  tab: {
    fontWeight: 'bold',
    width: '100%',
    height: 40,
    borderBottom: 0,
    textAlign: 'center',
    padding: '10px 5px 5px 5px',
    margin: 0,
    borderRadius: '5px 5px 0 0',
    background: 'white',
    cursor: 'pointer'
  },
  sparklineWidth: 150,
  sparklineHeight: 50
};

export default StudentProfilePage;