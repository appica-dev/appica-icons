<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-9 9h4m5 9a9 9 0 0 0 9-9m-9 9v-3m9-6a9 9 0 0 0-9-9m9 9h-3m-6-9v4m0 5v.01\"/>";
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
