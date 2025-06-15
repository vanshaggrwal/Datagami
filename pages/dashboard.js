'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Welcome, {user.fullName}</h2>
      <h3>Your Details:</h3>
      <ul>
        {Object.entries(user).map(([key, value]) =>
          key !== 'password' && key !== '__v' && key !== '_id' ? (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
