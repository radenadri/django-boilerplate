from inertia import render


def home(request):
    return render(
        request,
        "Home",
        props={
            "title": "Django + Inertia + React = 🖤",
        },
    )
