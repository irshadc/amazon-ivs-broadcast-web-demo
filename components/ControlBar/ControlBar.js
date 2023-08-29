import styles from './ControlBar.module.css';
import Button from '../Button';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { useState, useEffect } from 'react';

function MuteButton({ muted, handleMicMute, ...additionalProps }) {
  const buttonStyle = muted ? 'destruct' : 'base';
  return (
    <Button
      type={`${buttonStyle}`}
      style='round'
      onClick={handleMicMute}
      {...additionalProps}
    >
      {!muted ? (
        <Icon>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M24 26.85q-2.15 0-3.6-1.55-1.45-1.55-1.45-3.75V9q0-2.1 1.475-3.55Q21.9 4 24 4t3.575 1.45Q29.05 6.9 29.05 9v12.55q0 2.2-1.45 3.75-1.45 1.55-3.6 1.55Zm0-11.4ZM24 42q-.65 0-1.075-.425-.425-.425-.425-1.075v-5.3q-4.9-.55-8.375-3.925Q10.65 27.9 10.1 23.15q-.1-.65.375-1.125t1.175-.475q.55 0 .95.4.4.4.5.95.55 4.05 3.65 6.725Q19.85 32.3 24 32.3t7.25-2.675q3.1-2.675 3.65-6.725.1-.55.525-.95.425-.4.975-.4.7 0 1.15.475.45.475.35 1.125-.55 4.75-4.025 8.125Q30.4 34.65 25.5 35.2v5.3q0 .65-.425 1.075Q24.65 42 24 42Zm0-18.15q.9 0 1.475-.675.575-.675.575-1.625V9q0-.85-.6-1.425Q24.85 7 24 7t-1.45.575q-.6.575-.6 1.425v12.55q0 .95.575 1.625T24 23.85Z' />
          </svg>
        </Icon>
      ) : (
        <Icon>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M34.3 29.95 32.15 27.8Q33 26.75 33.475 25.5Q33.95 24.25 34.1 22.9Q34.2 22.35 34.625 21.95Q35.05 21.55 35.6 21.55Q36.3 21.55 36.75 22.025Q37.2 22.5 37.1 23.15Q36.85 25 36.15 26.75Q35.45 28.5 34.3 29.95ZM27.9 23.55 25.25 20.95V9.05Q25.25 8.2 24.65 7.6Q24.05 7 23.2 7Q22.35 7 21.75 7.6Q21.15 8.2 21.15 9.05V16.8L18.15 13.8V9.05Q18.15 6.95 19.625 5.475Q21.1 4 23.2 4Q25.3 4 26.775 5.475Q28.25 6.95 28.25 9.05V21.55Q28.25 21.95 28.175 22.55Q28.1 23.15 27.9 23.55ZM23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7ZM40.55 44.3 2.75 6.5Q2.35 6.1 2.35 5.525Q2.35 4.95 2.75 4.55Q3.15 4.15 3.7 4.15Q4.25 4.15 4.65 4.55L42.5 42.4Q42.9 42.8 42.9 43.35Q42.9 43.9 42.5 44.3Q42.1 44.7 41.525 44.7Q40.95 44.7 40.55 44.3ZM21.7 40.5V35.2Q16.8 34.65 13.325 31.275Q9.85 27.9 9.3 23.15Q9.2 22.5 9.675 22.025Q10.15 21.55 10.85 21.55Q11.4 21.55 11.8 21.95Q12.2 22.35 12.3 22.9Q12.85 26.95 15.95 29.625Q19.05 32.3 23.2 32.3Q25.1 32.3 26.85 31.675Q28.6 31.05 30.05 29.95L32.2 32.1Q30.65 33.4 28.75 34.175Q26.85 34.95 24.7 35.2V40.5Q24.7 41.15 24.275 41.575Q23.85 42 23.2 42Q22.55 42 22.125 41.575Q21.7 41.15 21.7 40.5Z' />
          </svg>
        </Icon>
      )}
    </Button>
  );
}

function CamButton({ muted, handleCameraMute, ...additionalProps }) {
  const buttonStyle = muted ? 'destruct' : 'base';
  return (
    <Button
      type={`${buttonStyle}`}
      style='round'
      onClick={handleCameraMute}
      {...additionalProps}
    >
      {!muted ? (
        <Icon>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H33Q34.2 8 35.1 8.9Q36 9.8 36 11V21.75L42.7 15.05Q43.05 14.7 43.525 14.875Q44 15.05 44 15.55V32.45Q44 32.95 43.525 33.125Q43.05 33.3 42.7 32.95L36 26.25V37Q36 38.2 35.1 39.1Q34.2 40 33 40ZM7 37H33Q33 37 33 37Q33 37 33 37V11Q33 11 33 11Q33 11 33 11H7Q7 11 7 11Q7 11 7 11V37Q7 37 7 37Q7 37 7 37ZM7 37Q7 37 7 37Q7 37 7 37V11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11V37Q7 37 7 37Q7 37 7 37Z' />
          </svg>
        </Icon>
      ) : (
        <Icon>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m42.7 32.95-6.7-6.7v5.55l-3-3V11H15.2l-3-3H33q1.2 0 2.1.9.9.9.9 2.1v10.75l6.7-6.7q.35-.35.825-.175t.475.675v16.9q0 .5-.475.675-.475.175-.825-.175ZM41.35 45.6 2.95 7.2q-.4-.4-.4-1T3 5.15q.45-.45 1.05-.45.6 0 1.05.45l38.4 38.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45ZM24.2 20ZM7.95 8l3 3H7v26h26v-3.95l3 3V37q0 1.2-.9 2.1-.9.9-2.1.9H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8Zm11.9 16.1Z' />
          </svg>
        </Icon>
      )}
    </Button>
  );
}

function ScreenShareButton({ active, handleScreenShare, ...additionalProps }) {
  const buttonStyle = active ? 'primary' : 'base';
  return (
    <Button
      type={`${buttonStyle}`}
      style='round'
      onClick={handleScreenShare}
      {...additionalProps}
    >
      <Icon>
        {active ? (
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            id='endShare'
          >
            <path d='m27.6 23.75-5.4-5.4h4.3v-1.7q0-.5.475-.675.475-.175.825.175l3.15 3.15q.05.05.25.55 0 .1-.25.55Zm12.65 12.7-3-3h3.45V9.3H13.1l-3-3h30.6q1.2 0 2.1.9.9.9.9 2.1v24.15q0 1.3-1 2.2-1 .9-2.45.8Zm.55 9.05L37 41.75H3.5q-.65 0-1.075-.425Q2 40.9 2 40.25q0-.65.425-1.075.425-.425 1.075-.425H34l-2.3-2.3H7.35q-1.2 0-2.1-.9-.9-.9-.9-2.1V9.1l-1.7-1.7q-.45-.45-.45-1.075t.45-1.075q.45-.45 1.075-.45t1.075.45L42.95 43.4q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.075.45T40.8 45.5ZM19.65 24.4v2.75q0 .65-.425 1.075-.425.425-1.075.425-.65 0-1.075-.425-.425-.425-.425-1.075v-3q0-.5.1-1.125t.35-1.175L7.35 12.1v21.35H28.7Zm4.4-2.6Zm-6 .95Z' />
          </svg>
        ) : (
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            id='startShare'
          >
            <path d='M18.15 28.65q.65 0 1.075-.425.425-.425.425-1.075v-3q0-1.2.8-2t2-.8h4.05v1.7q0 .5.475.675.475.175.825-.175l3.15-3.15q.05-.05.25-.55 0-.1-.25-.55l-3.15-3.15q-.35-.35-.825-.175t-.475.675v1.7h-4.05q-2.4 0-4.1 1.7-1.7 1.7-1.7 4.1v3q0 .65.425 1.075.425.425 1.075.425ZM7 36q-1.25 0-2.125-.875T4 33V9q0-1.25.875-2.125T7 6h34q1.25 0 2.125.875T44 9v24q0 1.25-.875 2.125T41 36Zm0-3h34V9H7v24Zm-3.5 9q-.65 0-1.075-.425Q2 41.15 2 40.5q0-.65.425-1.075Q2.85 39 3.5 39h41q.65 0 1.075.425Q46 39.85 46 40.5q0 .65-.425 1.075Q45.15 42 44.5 42ZM7 9v24V9Z' />
          </svg>
        )}
      </Icon>
    </Button>
  );
}

function WhiteboardButton({ active, handleWhiteboarding, ...additionalProps }) {
  const buttonStyle = active ? 'primary' : 'base';
  return (
    <Button
      type={`${buttonStyle}`}
      style='round'
      onClick={handleWhiteboarding}
      {...additionalProps}
    >
      <Icon>
        {active ? (
          <svg
            width='48'
            height='48'
            fill="#00FF00"
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            id='stopWhiteboarding'
          >
            <g>
	<g>
		<rect x="23.622" y="17.643" width="5.19" height="1.862"/>
		<path d="M30.927,29.29v-7.65v-0.309V1.647H0.99v19.2v0.792v7.348H0v1.008h4.139v-1.008H2.284V21.64h27.353v7.65h-1.828v1.008
			h4.137V29.29H30.927z M29.637,20.401H2.28V2.937h27.357V20.401L29.637,20.401z"/>
		<path d="M6.018,7.958C6.37,7.922,6.705,7.864,7.03,7.791c-0.158,0.426-0.204,0.878-0.071,1.35c0.114,0.405,0.412,0.61,0.806,0.695
			c-0.163,0.352-0.042,0.846,0.316,1.022c0.274,0.136,1.25,0.542,1.233,0.561c-0.402,0.485-0.2,1.439,0.57,1.376
			c0.36-0.03,0.72-0.071,1.079-0.11c-0.079,0.019-0.147,0.038-0.196,0.059c-0.915,0.392-0.196,1.592,0.621,1.473
			c1.019-0.148,2.003-0.366,2.993-0.366c-0.587,0.403-1.186,0.788-1.682,1.33c-0.375,0.408-0.275,1.236,0.355,1.347
			c1.794,0.315,3.321-0.146,4.83-0.762c0.078,0.055,0.166,0.1,0.276,0.117c2.537,0.393,4.945,0.208,7.466-0.162
			c1.024-0.149,0.589-1.703-0.429-1.554c-1.323,0.194-2.616,0.334-3.918,0.345c0.154-0.104,0.307-0.214,0.457-0.342
			c0.627-0.53-0.039-1.571-0.783-1.346c-1.812,0.547-3.475,1.696-5.32,2.091c0.432-0.299,0.852-0.612,1.215-1.012
			c0.42-0.463,0.23-1.149-0.354-1.347c-0.853-0.289-1.709-0.339-2.567-0.288c0.015-0.074,0.036-0.142,0.042-0.225
			c0.02-0.28-0.169-0.558-0.398-0.695c-0.739-0.444-1.596-0.411-2.445-0.311c-0.087-0.483-0.594-0.792-1.266-1.114
			c0.694-0.452,1.637-0.686,2.335-0.971c0.766-0.312,0.77-1.684-0.213-1.583c-0.859,0.088-1.643,0.136-2.449,0.486
			c-2.082,0.901,0.141-0.863,0.653-1.26c0.791-0.613-0.217-1.586-0.977-1.266C8.191,5.8,7.127,6.142,6.018,6.347
			C4.993,6.449,4.983,8.062,6.018,7.958z"/>
	</g>
</g>
          </svg>
        ) : (
          <svg
            width='48'
            height='48'
            fill="#FF0000" 
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            id='startWhiteboarding'
          >
            <g>
	<g>
		<rect x="23.622" y="17.643" width="5.19" height="1.862"/>
		<path d="M30.927,29.29v-7.65v-0.309V1.647H0.99v19.2v0.792v7.348H0v1.008h4.139v-1.008H2.284V21.64h27.353v7.65h-1.828v1.008
			h4.137V29.29H30.927z M29.637,20.401H2.28V2.937h27.357V20.401L29.637,20.401z"/>
		<path d="M6.018,7.958C6.37,7.922,6.705,7.864,7.03,7.791c-0.158,0.426-0.204,0.878-0.071,1.35c0.114,0.405,0.412,0.61,0.806,0.695
			c-0.163,0.352-0.042,0.846,0.316,1.022c0.274,0.136,1.25,0.542,1.233,0.561c-0.402,0.485-0.2,1.439,0.57,1.376
			c0.36-0.03,0.72-0.071,1.079-0.11c-0.079,0.019-0.147,0.038-0.196,0.059c-0.915,0.392-0.196,1.592,0.621,1.473
			c1.019-0.148,2.003-0.366,2.993-0.366c-0.587,0.403-1.186,0.788-1.682,1.33c-0.375,0.408-0.275,1.236,0.355,1.347
			c1.794,0.315,3.321-0.146,4.83-0.762c0.078,0.055,0.166,0.1,0.276,0.117c2.537,0.393,4.945,0.208,7.466-0.162
			c1.024-0.149,0.589-1.703-0.429-1.554c-1.323,0.194-2.616,0.334-3.918,0.345c0.154-0.104,0.307-0.214,0.457-0.342
			c0.627-0.53-0.039-1.571-0.783-1.346c-1.812,0.547-3.475,1.696-5.32,2.091c0.432-0.299,0.852-0.612,1.215-1.012
			c0.42-0.463,0.23-1.149-0.354-1.347c-0.853-0.289-1.709-0.339-2.567-0.288c0.015-0.074,0.036-0.142,0.042-0.225
			c0.02-0.28-0.169-0.558-0.398-0.695c-0.739-0.444-1.596-0.411-2.445-0.311c-0.087-0.483-0.594-0.792-1.266-1.114
			c0.694-0.452,1.637-0.686,2.335-0.971c0.766-0.312,0.77-1.684-0.213-1.583c-0.859,0.088-1.643,0.136-2.449,0.486
			c-2.082,0.901,0.141-0.863,0.653-1.26c0.791-0.613-0.217-1.586-0.977-1.266C8.191,5.8,7.127,6.142,6.018,6.347
			C4.993,6.449,4.983,8.062,6.018,7.958z"/>
	</g>
</g>
          </svg>
        )}
      </Icon>
    </Button>
  );
}

function LoadPdfDocButton({ active,pageNum, loadPdfDoc, ...additionalProps }) {
  const buttonStyle = !active ? 'primary' : 'base';
  return (
    <Button
      type={`${buttonStyle}`}
      style='round'
      onClick={loadPdfDoc}
      {...additionalProps}
    >
      <Icon>
        {active ? (
          <svg height="48" width="48"  viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g> <path d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"></path> <path d="M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"></path> <path  d="M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"></path> <path  d="M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"></path> </g> </g></svg>
        ) : (
          <svg height="48" width="48"  viewBox="0 0 512 512"  fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g> <path d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"></path> <path d="M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"></path> <path  d="M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"></path> <path  d="M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"></path> </g> </g></svg>
        )}
      </Icon>
    </Button>
  );
}

function PrevPageButton({ pageNum, loadPrevPage, ...additionalProps }) {
  return (
    <Button
      type='base'
      style='round'
      onClick={loadPrevPage}
      {...additionalProps}
    >
      <Icon>
      <svg fill="#000000" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M17,3V21L5,12Z"></path></g></svg>
      </Icon>
    </Button>
  );
}

function NextPageButton({ pageNum, loadNextPage, ...additionalProps }) {
  return (
    <Button
      type='base'
      style='round'
      onClick={loadNextPage}
      {...additionalProps}
    >
      <Icon>
      <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="next" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M17,12,5,21V3Z"></path></g></svg>
      </Icon>
    </Button>
  );
}
function SettingsButton({ handleSettings, ...additionalProps }) {
  return (
    <Button style='round' onClick={handleSettings} {...additionalProps}>
      <Icon>
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          xmlns='http://www.w3.org/2000/svg'
          id='cog'
        >
          <path d='M27.3 44H20.7Q20.15 44 19.725 43.65Q19.3 43.3 19.2 42.75L18.4 37.7Q17.45 37.35 16.4 36.75Q15.35 36.15 14.55 35.5L9.9 37.65Q9.35 37.9 8.8 37.725Q8.25 37.55 7.95 37L4.65 31.15Q4.35 30.65 4.5 30.1Q4.65 29.55 5.1 29.2L9.4 26.05Q9.3 25.6 9.275 25.025Q9.25 24.45 9.25 24Q9.25 23.55 9.275 22.975Q9.3 22.4 9.4 21.95L5.1 18.8Q4.65 18.45 4.5 17.9Q4.35 17.35 4.65 16.85L7.95 11Q8.25 10.45 8.8 10.275Q9.35 10.1 9.9 10.35L14.55 12.5Q15.35 11.85 16.4 11.25Q17.45 10.65 18.4 10.35L19.2 5.25Q19.3 4.7 19.725 4.35Q20.15 4 20.7 4H27.3Q27.85 4 28.275 4.35Q28.7 4.7 28.8 5.25L29.6 10.3Q30.55 10.65 31.625 11.225Q32.7 11.8 33.45 12.5L38.1 10.35Q38.65 10.1 39.2 10.275Q39.75 10.45 40.05 11L43.35 16.8Q43.65 17.3 43.525 17.875Q43.4 18.45 42.9 18.8L38.6 21.85Q38.7 22.35 38.725 22.925Q38.75 23.5 38.75 24Q38.75 24.5 38.725 25.05Q38.7 25.6 38.6 26.1L42.9 29.2Q43.35 29.55 43.5 30.1Q43.65 30.65 43.35 31.15L40.05 37Q39.75 37.55 39.2 37.725Q38.65 37.9 38.1 37.65L33.45 35.5Q32.65 36.15 31.625 36.775Q30.6 37.4 29.6 37.7L28.8 42.75Q28.7 43.3 28.275 43.65Q27.85 44 27.3 44ZM24 30.5Q26.7 30.5 28.6 28.6Q30.5 26.7 30.5 24Q30.5 21.3 28.6 19.4Q26.7 17.5 24 17.5Q21.3 17.5 19.4 19.4Q17.5 21.3 17.5 24Q17.5 26.7 19.4 28.6Q21.3 30.5 24 30.5ZM24 27.5Q22.55 27.5 21.525 26.475Q20.5 25.45 20.5 24Q20.5 22.55 21.525 21.525Q22.55 20.5 24 20.5Q25.45 20.5 26.475 21.525Q27.5 22.55 27.5 24Q27.5 25.45 26.475 26.475Q25.45 27.5 24 27.5ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM21.8 41H26.2L26.9 35.4Q28.55 35 30.025 34.15Q31.5 33.3 32.7 32.1L38 34.4L40 30.8L35.3 27.35Q35.5 26.5 35.625 25.675Q35.75 24.85 35.75 24Q35.75 23.15 35.65 22.325Q35.55 21.5 35.3 20.65L40 17.2L38 13.6L32.7 15.9Q31.55 14.6 30.1 13.725Q28.65 12.85 26.9 12.6L26.2 7H21.8L21.1 12.6Q19.4 12.95 17.925 13.8Q16.45 14.65 15.3 15.9L10 13.6L8 17.2L12.7 20.65Q12.5 21.5 12.375 22.325Q12.25 23.15 12.25 24Q12.25 24.85 12.375 25.675Q12.5 26.5 12.7 27.35L8 30.8L10 34.4L15.3 32.1Q16.5 33.3 17.975 34.15Q19.45 35 21.1 35.4Z' />
        </svg>
      </Icon>
    </Button>
  );
}

function StreamButton({
  isLive,
  handleStream,
  loading,
  disabled,
  ...additionalProps
}) {
  const buttonStyle = isLive ? 'destruct' : 'primary';
  const buttonContent = isLive ? 'Stop streaming' : 'Start streaming';

  return (
    <Button
      type={`${buttonStyle}`}
      style='roundedText'
      onClick={handleStream}
      fullWidth={'responsive'}
      disabled={disabled}
      loading={loading}
      {...additionalProps}
    >
      {buttonContent}
    </Button>
  );
}

export default function ControlBar({
  isLive,
  streamLoading,
  isDesktop,
  videoPermissions,
  micMuted,
  camMuted,
  screenShareActive,
  isWhiteboardActive,
  handleMicMute,
  handleWhiteboarding,
  pageNum,
  loadPrevPage,
  loadPdfDoc,
  loadNextPage,
  handleCameraMute,
  handleScreenShare,
  handleSettings,
  handleStream,
  handleAboutClick,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render this component in a browser.
  return (
    mounted && (
      <div className={styles.controlBar}>
        <Tooltip content={`${micMuted ? 'Unmute' : 'Mute'}`}>
          <MuteButton
            muted={micMuted}
            handleMicMute={handleMicMute}
            disabled={!videoPermissions}
          />
        </Tooltip>
        <Tooltip content={`${camMuted ? 'Show camera' : 'Hide camera'}`}>
          <CamButton
            muted={camMuted}
            handleCameraMute={handleCameraMute}
            disabled={!videoPermissions}
          />
        </Tooltip>
        <Tooltip content={`${isWhiteboardActive ? 'Show whiteboard' : 'Hide whiteboard'}`}>
          <WhiteboardButton
            active={isWhiteboardActive}
            handleWhiteboarding={handleWhiteboarding}
          />
        </Tooltip>
        <Tooltip content='Previous page'>
          <PrevPageButton
            pageNum={pageNum}
            loadPrevPage={loadPrevPage}
          />
        </Tooltip>
        <Tooltip content='Show PDF'>
          <LoadPdfDocButton
            pageNum={pageNum}
            active = {isWhiteboardActive}
            loadPdfDoc={loadPdfDoc}
          />
        </Tooltip>
        <Tooltip content='Next Page'>
          <NextPageButton
              pageNum={pageNum}
              loadNextPage={loadNextPage}
            />
        </Tooltip>
        {isDesktop && (
          <Tooltip
            content={`${
              screenShareActive ? 'Stop sharing' : 'Share your screen'
            }`}
          >
            <ScreenShareButton
              active={screenShareActive}
              handleScreenShare={handleScreenShare}
              disabled={!videoPermissions}
            />
          </Tooltip>
        )}
        <Tooltip content='Open settings'>
          <SettingsButton
            handleSettings={handleSettings}
            disabled={!videoPermissions}
          />
        </Tooltip>
        <div className={styles.responsiveShow}>
          <Tooltip content='About this tool'>
            <Button type={'base'} style='round' onClick={handleAboutClick}>
              <Icon>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 48 48'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M24.15 34q.65 0 1.075-.425.425-.425.425-1.075v-9.05q0-.6-.45-1.025Q24.75 22 24.15 22q-.65 0-1.075.425-.425.425-.425 1.075v9.05q0 .6.45 1.025.45.425 1.05.425ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z' />
                </svg>
              </Icon>
            </Button>
          </Tooltip>
        </div>
        <StreamButton
          isLive={isLive}
          handleStream={handleStream}
          loading={streamLoading}
          disabled={!videoPermissions || streamLoading}
        />
      </div>
    )
  );
}
