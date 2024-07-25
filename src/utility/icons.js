import React from 'react';

const icons = {
  breadCrumb: (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
    >
		<polyline points="9 18 15 12 9 6"></polyline>
	</svg>
  ),
  support: (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="#ffffff"
		xmlns="http://www.w3.org/2000/svg"
    >
		<path
			d="M7.87891 5.51884C9.05048 4.49372 10.95 4.49372 12.1215 5.51884C13.2931 6.54397 13.2931 8.20603 12.1215 9.23116C11.9176 9.40958 11.6917 9.55695 11.4513 9.67326C10.7056 10.0341 10.0002 10.6716 10.0002 11.5V12.25M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 15.25H10.0075V15.2575H10V15.25Z"
			stroke="#475569"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
      />
	</svg>
  ),
  whatsNew: (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M9.16667 4.90182V16.0335C9.16667 16.8434 8.51008 17.5 7.70015 17.5C7.08038 17.5 6.52752 17.1104 6.31907 16.5267L4.53039 11.4024M15 10.8333C16.3807 10.8333 17.5 9.71404 17.5 8.33333C17.5 6.95262 16.3807 5.83333 15 5.83333M4.53039 11.4024C3.33691 10.8951 2.5 9.71194 2.5 8.33333C2.5 6.49238 3.99238 5 5.83333 5H7.36007C10.7773 5 13.7141 3.97159 15 2.5L15 14.1667C13.7141 12.6951 10.7773 11.6667 7.36007 11.6667L5.83331 11.6667C5.37098 11.6667 4.93064 11.5725 4.53039 11.4024Z"
			stroke="#475569"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
      ></path>
	</svg>
  ),
  checkMark: (
	<svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
		<path
			d="M8.87179 0.545513L8.45503 0.128761C8.28333 -0.0429202 8.00306 -0.0429202 7.82988 0.128761L3.45987 4.50027L1.17066 2.21107C0.998981 2.03937 0.718691 2.03937 0.545533 2.21107L0.128761 2.62782C-0.0429202 2.79952 -0.0429202 3.07979 0.128761 3.25295L3.14584 6.27C3.23242 6.35659 3.34393 6.40062 3.45693 6.40062C3.56994 6.40062 3.68292 6.35659 3.76805 6.27L8.86737 1.17066C9.04347 0.996046 9.04347 0.717233 8.87179 0.545513Z"
			fill="currentColor"
      />
	</svg>
  ),
  LoaderCircle: (
	<svg
		data-v-f6279e27=""
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round"
		height={ 18 }
		width={ 18 }
    >
		<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
	</svg>
  ),
  CircleAlert: (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
    >
		<circle cx="12" cy="12" r="10" />
		<line x1="12" x2="12" y1="8" y2="12" />
		<line x1="12" x2="12.01" y1="16" y2="16" />
	</svg>
  ),
};

export default icons;
