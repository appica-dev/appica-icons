<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 12a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4v8M6 8V4m4.958 13.707A2 2 0 0 1 12 14V4m6 5a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v2m0-6V4m2.2 16.2L22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
