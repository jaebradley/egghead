import React from 'react';

const Link = ({ address, hide }) => ((!hide && <a href={address}>Click</a>) || null);

export default Link;
