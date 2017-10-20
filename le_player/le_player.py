# -*- coding: utf-8 -*-

import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Scope, Boolean
from xblock.fragment import Fragment

from .utils import (
    load_resource,
    render_template,
    load_resources
)

import logging

logger = logging.getLogger(__name__)
_ = lambda text: text


class LePlayerXBlock(XBlock):
    """
    Lektoriy player implementation for OpenEdx
    """
    icon_class = "video"

    display_name = String(
        help=_("The name students see. This name appears in the course ribbon and as a header for the video."),
        display_name=_("Component Display Name"),
        default="Video",
        scope=Scope.settings
    )

    video_id = String(
        default='',
        display_name=_('Video ID'),
        help=_('EVMS video ID'),
        scope=Scope.content
    )

    video_url = String(
        default='',
        display_name=_('Video URL'),
        help=_('Video URL'),
        scope=Scope.content
    )

    def student_view(self, context=None):
        """
        The primary view of the LePlayerXBlock, shown to students
        when viewing courses.
        """

        # Custom fragment initialization

        fragment = Fragment()
        fragment.add_content(
            render_template(
                'static/html/le_player.html',
                context
            )
        )
        js_urls = (
            "static/js/le_player.js",
        )
        css_urls = (
            'static/css/le_player.css',
        )
        load_resources(js_urls, css_urls, fragment)
        fragment.initialize_js('LePlayerXBlock')
        return fragment

    def studio_view(self, *args, **kwargs):
        context = {
            "display_name": self.display_name,
            "video_id": self.video_id,
            "video_url": self.video_url,
        }

        fragment = Fragment()
        fragment.add_content(
            render_template(
                'static/html/le_player_edit.html',
                context
            )
        )
        js_urls = (
            "static/js/le_player_edit.js",
        )

        self.load_resources(js_urls, fragment)
        fragment.initialize_js('LePlayerXBlockEdit')

    # TO-DO: change this handler to perform your own actions.  You may need more
    # than one handler, or you may not need any handlers at all.
    @XBlock.json_handler
    def increment_count(self, data, suffix=''):
        """
        An example handler, which increments the data.
        """
        # Just to show data coming in...
        assert data['hello'] == 'world'

        self.count += 1
        return {"count": self.count}

    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("LePlayerXBlock",
             """<le_player/>
             """),
            ("Multiple LePlayerXBlock",
             """<vertical_demo>
                <le_player/>
                <le_player/>
                <le_player/>
                </vertical_demo>
             """),
        ]
