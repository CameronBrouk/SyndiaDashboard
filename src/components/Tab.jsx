import React from 'react'
import PropTypes from 'prop-types'

import 'stylesheets/Tab.scss'

const propTypes = {
  /** Label for visual display */
  label: PropTypes.node,
  /** Value representing tab to pass with callback function */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** True only if tab is active (intended use implies respective content for tab is visible) */
  active: PropTypes.bool,
  /** Callback function to call when tab is clicked */
  onClickAction: PropTypes.func,
}

/** Basic functional Tab component representing a single tab item */
const Tab = ({ label, active = false, onClickAction }) => (
  <button
    className={`tab ${active ? 'tab-active' : 'tab-inactive'}`}
    onClick={onClickAction}>
    {label}
  </button>
)

Tab.propTypes = propTypes
export default Tab
