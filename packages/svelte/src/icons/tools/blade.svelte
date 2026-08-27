<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8.04 15.96 3.168-3.168m1.584-1.584L15.96 8.04m-1.98 0 1.98 1.98m-7.92 3.96 1.98 1.98m7.63-12.17 2.56 2.56a.99.99 0 0 1 0 1.4l-.58.58a.99.99 0 0 0 0 1.4l.58.58a.99.99 0 0 1 0 1.4l-8.5 8.5a.99.99 0 0 1-1.4 0l-.58-.58a.99.99 0 0 0-1.4 0l-.58.58a.99.99 0 0 1-1.4 0l-2.56-2.56a.99.99 0 0 1 0-1.4l.58-.58a.99.99 0 0 0 0-1.4l-.58-.58a.99.99 0 0 1 0-1.4l8.5-8.5a.99.99 0 0 1 1.4 0l.58.58a.99.99 0 0 0 1.4 0l.58-.58a.99.99 0 0 1 1.4 0M11.01 12a.99.99 0 1 0 1.98 0 .99.99 0 0 0-1.98 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
