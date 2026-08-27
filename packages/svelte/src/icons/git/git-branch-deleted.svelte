<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 18a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h6a2 2 0 0 0 2-2v-5M7 16V8m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m10 3-3 3m3-3 3 3M15 4l4 4m-4 0 4-4\"/>";
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
