import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

import { ImageResponse } from 'next/server'
import Logo from './fragments/Logo/Logo'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    const styleSquare: React.CSSProperties = {
        position: 'absolute',
        width: '90%',
        height: '90%',
        border: `2px solid ${theme?.colors?.primary as string ?? 'orange'}`,
        borderRadius: '10%',
        inset: 0
    }

    return new ImageResponse(
        (
            <Logo
                styles={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme?.colors?.primary as string ?? 'orange',
                    border: `2px solid ${theme?.colors?.primary as string ?? 'orange'}`,
                    borderRadius: '20%',
                    fontSize: 20,
                }}
            />
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}