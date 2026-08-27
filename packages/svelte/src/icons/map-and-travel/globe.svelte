<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.5 15.5a8 8 0 0 0 6.194 1.908 8 8 0 0 0 5.574-3.312A8.02 8.02 0 0 0 14.735 2.5m-3.993 15v4m-3.994 0h7.987m-7.987-12c0 1.06.42 2.078 1.17 2.828a3.99 3.99 0 0 0 5.648 0A4.003 4.003 0 0 0 10.742 5.5a4 4 0 0 0-2.824 1.172A4 4 0 0 0 6.748 9.5\"/>";
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
