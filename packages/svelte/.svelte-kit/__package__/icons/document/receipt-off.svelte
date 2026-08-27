<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 5v16l3-2 2 2 2-2 2 2 2-2 3 2v-1.99M7 3h10a2 2 0 0 1 2 2v10m-8-8h4m-6 4h2m2 4h2m0-4v.01M3 3l18 18\"/>";
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
