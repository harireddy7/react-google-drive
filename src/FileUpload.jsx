import React, { useRef } from 'react';

const scope = ['https://www.googleapis.com/auth/drive.file'];

const FileUpload = ({ notify }) => {
	const token = useRef();
	const pickerApiLoaded = useRef();

	const { REACT_APP_CLIENT_ID, REACT_APP_PROJECT_ID, REACT_APP_DEVELOPER_KEY } =
		process.env;

	// 1. Load Google Auth & Picker APIs
	function showPickerDialog() {
		window.gapi.load('auth', { callback: onAuthApiLoad });
		window.gapi.load('picker', { callback: onPickerApiLoad });
	}

	// 2. Handle Auth Api load
	function onAuthApiLoad() {
		window.gapi.auth.authorize(
			{
				client_id: REACT_APP_CLIENT_ID,
				scope: scope,
				immediate: false,
			},
			handleAuthResult
		);
	}

	// 3. Handle Picker Api load
	function onPickerApiLoad() {
		pickerApiLoaded.current = true;
		// createPicker();
	}

	// 4. Handle Google Auth
	function handleAuthResult(authResult) {
		// console.log(authResult);
		if (authResult && !authResult.error) {
			token.current = authResult.access_token;
			createPicker();
		}
	}

	// 5. Create and render a Picker object for searching images.
	function createPicker() {
		if (pickerApiLoaded.current && token.current) {
			const uploadView =
				new window.google.picker.DocsUploadView().setIncludeFolders(true);

			const picker = new window.google.picker.PickerBuilder()
				.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
				.setAppId(REACT_APP_PROJECT_ID)
				.setOAuthToken(token.current)
				.addView(uploadView)
				.setDeveloperKey(REACT_APP_DEVELOPER_KEY)
				.setCallback(pickerCallback)
				.build();
			picker.setVisible(true);
		}
	}

	// 6. Callback from drive after upload
	function pickerCallback(data) {
		if (data.action === window.google.picker.Action.PICKED) {
			notify(true);
			setTimeout(() => {
				notify(false);
			}, [3000]);
		}
	}

	return (
		<button className='upload-btn' onClick={showPickerDialog}>
			Upload to drive 🚀
		</button>
	);
};

export default FileUpload;
