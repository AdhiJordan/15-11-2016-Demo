import React, {PropTypes} from 'react';
import classNames from 'classnames';

const styles = {
	error: {
		color: 'brown',
	}
}
const SearchTextbox = ({name, label, placeholder, onChange, value, error}) => {
	// let wrapperClass = "form-group";
	       let wrapperClass = classNames({
      // 'form-group': true,
      'div1': true,
      'has-error': error && error.length > 0
    });
	return (
		<div className={wrapperClass}>
		   
		   <div className="field">
		      <input 
		         type="text"
		         name={name}
		         className="form-control"
		         placeholder={placeholder}
		         onChange={onChange}
		         value={value}
		         style={{width: 350}}
		        />
              {error && <div style={styles.error}>{error}</div>}
		   </div>
		</div>
	);
};

SearchTextbox.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};

export default SearchTextbox;