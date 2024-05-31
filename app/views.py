from inertia import render

def home(request):
    return render(request, 'Home', props={
        'title': 'Django Inertia Vue.js',
        'description': 'Get started'
    })
