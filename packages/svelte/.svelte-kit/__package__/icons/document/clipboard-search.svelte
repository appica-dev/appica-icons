<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.5M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m4 6V7a2 2 0 0 0-2-2h-2m5.2 15.2L22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
