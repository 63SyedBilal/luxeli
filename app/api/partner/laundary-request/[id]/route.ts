import { NextRequest, NextResponse } from 'next/server';
import { LaundryRequestController } from '@/controllers/partner/laundary/LaundaryRequest';
import { withAuth, AuthenticatedRequest } from '@/lib/middleware';


// GET /api/partner/activity-requests/[id] - Get single activity request
export const GET = withAuth(async (request: AuthenticatedRequest, context?: { params?: { [key: string]: string | string[] } | Promise<{ [key: string]: string | string[] }> }) => {
  try {
    let id: string;
    if (context?.params) {
      const params = await Promise.resolve(context.params);
      id = params.id as string;
    } else {
      const url = new URL(request.url);
      const segments = url.pathname.split('/');
      id = segments[segments.length - 1];
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Request ID is required' },
        { status: 400 }
      );
    }

    return await LaundryRequestController.getRequestById(id);
  } catch (error: any) {
    console.error('Get Laundary Request API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to get activity request' },
      { status: 500 }
    );
  }
});

// PATCH /api/partner/activity-requests/[id] - Update activity request
export const PATCH = withAuth(async (request: AuthenticatedRequest, context?: { params?: { [key: string]: string | string[] } | Promise<{ [key: string]: string | string[] }> }) => {
  try {
    let id: string;
    if (context?.params) {
      const params = await Promise.resolve(context.params);
      id = params.id as string;
    } else {
      const url = new URL(request.url);
      const segments = url.pathname.split('/');
      id = segments[segments.length - 1];
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Request ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    return await LaundryRequestController.updateRequest(id, body);
  } catch (error: any) {
    console.error('Update Activity Request API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to update activity request' },
      { status: 500 }
    );
  }
});

// DELETE /api/partner/activity-requests/[id] - Delete activity request
export const DELETE = withAuth(async (request: AuthenticatedRequest, context?: { params?: { [key: string]: string | string[] } | Promise<{ [key: string]: string | string[] }> }) => {
  try {
    let id: string;
    if (context?.params) {
      const params = await Promise.resolve(context.params);
      id = params.id as string;
    } else {
      const url = new URL(request.url);
      const segments = url.pathname.split('/');
      id = segments[segments.length - 1];
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Request ID is required' },
        { status: 400 }
      );
    }  

    return await LaundryRequestController.deleteRequest(id);
  } catch (error: any) {
    console.error('Delete Activity Request API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to delete activity request' },
      { status: 500 }
    );
  }
});

