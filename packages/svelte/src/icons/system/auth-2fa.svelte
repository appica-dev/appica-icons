<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8m7 6.2V8h4m-4 4h3m4 4v-6a2 2 0 1 1 4 0v6m-4-3h4\"/>";
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
