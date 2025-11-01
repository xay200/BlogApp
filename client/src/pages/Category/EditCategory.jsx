import React, { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent } from '@/components/ui/card'
import slugify from 'slugify'
import { showToast } from '@/helpers/showToast'
import { getEnv } from '@/helpers/getEnv'
import { useParams } from 'react-router-dom'
import { useFetch } from '@/hooks/useFetch'



const EditCategory = () => {
    const {category_id} = useParams()

    const { data: categoryData, loading, error } = useFetch(`${getEnv('VITE_API_BASE_URL')}/category/show/${category_id}`, {
        method: 'get',
        credentials: 'include'
    }, [category_id])
    
    const formSchema = z
        .object({
            name: z.string().min(1, "Tên danh mục không được bỏ trống"),
            slug: z.string().min(1),
        })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
        },
    })
    
    const categoryName = form.watch('name')

    useEffect(() => {
        if (typeof categoryName === 'string') {
            const slug = slugify(categoryName, { lower: true })
            form.setValue('slug', slug)
        }
    }, [categoryName])

    useEffect(() => {
        if (categoryData) {
           
            form.setValue('name', categoryData.category.name)
            form.setValue('slug', categoryData.category.slug)
        }
    }, [categoryData])

    async function onSubmit(values) {
        try {
            const response = await fetch(`${getEnv('VITE_API_BASE_URL')}/category/update/${category_id}`, {
                method: 'put',  
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values)
            })
            const data = await response.json()
            if (!response.ok) {
                return showToast('error', data.message)
            }
            
            showToast('success', data.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }

    return (
        <div>
            <Card className="pt-5 max-w-screen-md mx-auto">
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tên danh mục</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nhập tên danh mục" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='mb-3'>
                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Slug</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Slug" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit" className="w-full">Lưu</Button>

                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>

    )
}

export default EditCategory