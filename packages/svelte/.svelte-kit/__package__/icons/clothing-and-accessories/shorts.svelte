<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.057 6.764h13.886m-6.729-2.136v1.333m.022-.007-2.379 3.75M12.3 6.106l2.121 3.54M4.971 4H19.03L21 18.911 13.971 20 12 14.304 10.029 20 3 18.911z\"/>";
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
