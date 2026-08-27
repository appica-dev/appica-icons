<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 16v-5.5a2.5 2.5 0 1 1 5 0V16m0-4H3m9-6v12m7-6a2 2 0 0 0 0-4h-3v8h3a2 2 0 0 0 0-4m0 0h-3\"/>";
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
