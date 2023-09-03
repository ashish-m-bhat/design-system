import React, { useState } from 'react'

function useSnackbar() {
    const [snackbar, setSnackbar] = useState(null);
    return [snackbar, setSnackbar];
}

export default useSnackbar;
