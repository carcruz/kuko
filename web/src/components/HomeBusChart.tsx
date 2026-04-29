import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const data = [
  { route: 'SJ-Heredia', tiempo: 18 },
  { route: 'SJ-Cartago', tiempo: 25 },
  { route: 'SJ-Alajuela', tiempo: 15 },
]

export default function HomeBusChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={110}>
        <BarChart data={data}>
          <Bar dataKey="tiempo" fill="#F5A623" radius={0} />
          <XAxis
            dataKey="route"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#6B6B6B' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
