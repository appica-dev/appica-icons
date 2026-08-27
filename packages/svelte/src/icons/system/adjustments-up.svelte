<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 12a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4v8M6 8V4m7.927 11.462A2 2 0 1 0 12 18v2m0-16v10m6-5a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v3m0-7V4m1 18v-6m0 0 3 3m-3-3-3 3\"/>";
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
