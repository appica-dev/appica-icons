<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.25 3 3 5.25 5.25 7.5M13.125 3l2.25 2.25-2.25 2.25m-4.5 0L9.75 3m9 2.25A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H7.5a2.25 2.25 0 0 1-2.25-2.25v-7.875\"/>";
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
