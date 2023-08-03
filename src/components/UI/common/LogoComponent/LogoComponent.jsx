// import logo from '../../../../assets/img/';
import { useNavigate } from 'react-router-dom';
import css from './LogoComponent.module.css';
// import { mainLogoIcon } from '../../../../../constants/Icons';

export const LogoComponent = () => {
	const navigate = useNavigate();

	return (
		<div className={css.logoContainer} onClick={() => {navigate('/')}}>
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84858 19.4711C6.96176 18.6567 5.93768 17.5985 4.91992 16.2947C7.18302 18.6736 9.10656 16.4304 10.5 14.7613C11.8817 13.395 14.0987 10.4597 14.0987 8.49415C14.0987 7.66454 13.8107 6.90191 13.3293 6.29644C14.9792 7.91816 18.3206 11.7492 17.0653 14.948C15.7405 16.8876 14.3263 18.3915 13.1514 19.4702C11.6577 20.8428 9.34316 20.8428 7.84858 19.4711Z" fill="url(#paint0_radial_251_163)"/>
<path d="M18.2511 1.65553C20.1999 2.24849 21.3567 4.23099 20.9025 6.19652C20.4555 8.12901 19.6156 10.7125 18.0397 13.4121C17.7246 13.9524 17.3977 14.4641 17.0662 14.949C18.3215 11.7502 14.9801 7.91915 13.3302 6.29743C12.671 5.46871 11.6496 4.93647 10.5009 4.93647C8.61982 4.93647 7.07647 6.36441 6.91663 8.18348C6.92295 5.90808 7.7917 1.31261 12.1382 0.552654C14.5828 0.704468 16.6761 1.17598 18.2511 1.65553Z" fill="url(#paint1_radial_251_163)"/>
<path d="M6.91564 8.18271C6.90661 8.28541 6.90119 8.389 6.90119 8.49437C6.90119 10.4599 9.11823 13.3952 10.4999 14.7616C9.10649 16.4306 7.18295 18.6739 4.91985 16.2949C4.25158 15.4403 3.58602 14.4803 2.9611 13.4113C1.38524 10.7126 0.545382 8.12913 0.0983617 6.19575C-0.355883 4.23022 0.800951 2.24772 2.74978 1.65476C4.66609 1.07162 7.34821 0.499193 10.4999 0.499193C11.0616 0.499193 11.6071 0.517946 12.1372 0.550989C7.79072 1.31184 6.92196 5.9073 6.91564 8.18271Z" fill="url(#paint2_radial_251_163)"/>
<defs>
<radialGradient id="paint0_radial_251_163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2579 9.01762) scale(12.7523 12.6103)">
<stop stopColor="#2771B3"/>
<stop offset="0.4909" stopColor="#00A6DB"/>
<stop offset="1" stopColor="#84E7FD"/>
</radialGradient>
<radialGradient id="paint1_radial_251_163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.44958 5.22037) scale(13.7866 13.6331)">
<stop stopColor="#2571B4"/>
<stop offset="0.4909" stopColor="#00A6DB"/>
<stop offset="1" stopColor="#84E7FD"/>
</radialGradient>
<radialGradient id="paint2_radial_251_163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.9856 16.6127) scale(16.6427 16.4574)">
<stop stopColor="#2B75B7"/>
<stop offset="0.4909" stopColor="#00A6DB"/>
<stop offset="1" stopColor="#8CEAFF"/>
</radialGradient>
</defs>
</svg>
<div>
 {/* <img src={mainLogoIcon} alt="Logo" /> */}
 </div>

            <div className={css.logoTitle}>Logo</div>
		</div>
	);
}
