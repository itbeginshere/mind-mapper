import { useEffect, useState } from 'react'
import { VoidCallback } from '../@types/general';

type UseToggleReturnType = [boolean, VoidCallback, VoidCallback, VoidCallback];

export const useToggle = (initialValue : boolean = false) : UseToggleReturnType => {

    const [on, setOn] = useState<boolean>(initialValue);

    useEffect(() => {
        setOn(initialValue);
    }, [initialValue]);

    const toggleOn = () => setOn(true);

    const toggleOff = () => setOn(false);

    const toggle = () => setOn(!on);

    return [on, toggleOn, toggleOff, toggle];
}