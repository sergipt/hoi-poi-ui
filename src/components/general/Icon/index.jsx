import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { withTheme } from 'react-jss';
import classnames from 'classnames';

import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

import Chevron from './icons/Chevron';
import Info from './icons/Info';
import Close from './icons/Close';
import Lock from './icons/Lock';
import ThickEnabled from './icons/ThickEnabled';
import Warning from './icons/Warning';
import WarningRounded from './icons/WarningRounded';
import Drag from './icons/Drag';
import Edit from './icons/Edit';
import Trash from './icons/Trash';
import Magnifier from './icons/Magnifier';

const ICONS = {
    chevron: Chevron,
    info: Info,
    close: Close,
    lock: Lock,
    thickEnabled: ThickEnabled,
    warning: Warning,
    warningRounded: WarningRounded,
    drag: Drag,
    edit: Edit,
    trash: Trash,
    magnifier: Magnifier,
};

function Icon({
    name,
    color,
    theme,
    size,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    ...props
}) {
    let SelectedIcon = ICONS[name];
    if (!SelectedIcon) return null;

    // Overrides
    const override = getOverrides(overridesProp, Icon.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classes[size], classNameProp);

    return (
        <span className={rootClassName} {...override.wrapper}>
            <SelectedIcon color={color || theme.colors.greySoft} {...override.icon} />
        </span>
    );
}

Icon.overrides = ['wrapper', 'icon'];

Icon.defaultProps = {
    size: 'medium',
};

Icon.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
    name: PropTypes.string,
    color: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Icon' })(withTheme(Icon)));
