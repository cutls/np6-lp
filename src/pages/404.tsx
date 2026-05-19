import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
	return (
		<Container centerContent={true} h="100vh" justifyContent="center">
			<Head>
				<title>404 - np6</title>
				<meta name="description" content="Page not found - np6" />
			</Head>
			<VStack spacing={6} textAlign="center">
				<Heading size="2xl">404</Heading>
				<Box>
					<Text fontSize="xl" fontWeight="medium">Oops! Page not found.</Text>
					<Text color="gray.500">The page you are looking for doesn't exist.</Text>
				</Box>
				<Button as={Link} href="/" colorScheme="blue" borderRadius="full" px={8}>
					Go Home
				</Button>
			</VStack>
		</Container>
	)
}
