<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7m18 0a9 9 0 0 0-9-9m9 9h-4m-5-9a9 9 0 0 0-9 9m9-9v5m-9 4h4m1 9v-9a4 4 0 0 1 4-4m0 0a4 4 0 0 1 4 4v9M3 17h4m10 0h4M6 6l3 3m6 0 3-3\"/>";
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
