<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18m-4-8V7a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H9M7 7v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1\"/>";
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
