import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, Tooltip, Area } from 'recharts';

export const Graph = React.memo(({ data, className, units }) => {
    return (
        <div className={ className }>
            <ResponsiveContainer  width="100%" height="100%">
                <AreaChart 
                    width="100%"
                    height="100%"
                    data={ data }
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    {/* {
                        isVertical 
                            ? <>
                                <defs>
                                    <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                                        <stop offset="5%" stopColor="#f52952" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#f52952" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis type="number" hide={true}/> 
                                <YAxis dataKey="name" type="category" tickLine={false}/>
                            </>
                            : <>
                                
                            </>   
                    } */}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f52952" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f52952" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} />
                    <Tooltip 
                        contentStyle={{
                            borderRadius: '25px',
                            backgroundColor: '#F30C3A',
                            border: 'none',
                            padding: '5px 9px'
                        }}
                        labelStyle={{
                            display: 'none'
                        }}
                        itemStyle={{
                            color: '#ffffff'
                        }}
                        formatter={
                            (value) => [`${value}${units}`, '']
                        }
                        separator=''
                    />
                    <Area
                        animationDuration={ 500 }
                        type="monotone" 
                        dataKey="data" 
                        stroke="#f52952" 
                        fillOpacity={1} 
                        fill="url(#colorUv)"
                        dot={{ stroke: '#F30C3A', strokeWidth: 1, fill:'#ffffff' }}
                        activeDot={{ stroke: '#F30C3A', strokeWidth: 1, fill:'#F30C3A' }}
                        strokeWidth={1}
                        legendType="plainline"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
});
