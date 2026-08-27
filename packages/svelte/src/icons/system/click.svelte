<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h3m6-9v3M7.8 7.8 5.6 5.6m10.6 2.2 2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4z\"/>";
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
