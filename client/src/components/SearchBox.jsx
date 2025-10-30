import React, { useState } from 'react'
import { Input } from './ui/input'



const SearchBox = () => {
    return (
        <form >
            <Input placeholder="Tìm kiếm..." className="h-9 rounded-full" />
        </form>
    )
}

export default SearchBox