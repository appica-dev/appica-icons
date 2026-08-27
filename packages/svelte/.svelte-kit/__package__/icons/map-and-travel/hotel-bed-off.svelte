<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7a2 2 0 1 0 2 2m13 8v-3m0 0h-4m4 0v-2a3 3 0 0 0-3-3h-6M2 14h12-2v-2M2 8v9M3 3l18 18\"/>";
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
