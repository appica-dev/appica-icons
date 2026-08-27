<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.648 4a.64.64 0 0 0-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 0 0 .642-.539l3.35-14.71a.64.64 0 0 0-.64-.744zM14 15h-4L9 9h6z\"/>";
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
