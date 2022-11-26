import React, { Fragment } from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <Fragment>
        <select value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    </Fragment>
  )
}

export default MySelect;