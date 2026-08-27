<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 12h6m-3-3v6m-6 4a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m12 14a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2\"/>";
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
