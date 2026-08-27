<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 5.25c-5.32 0-9.75 2.92-9.75 6.75s4.43 6.75 9.75 6.75 9.75-2.92 9.75-6.75S17.32 5.25 12 5.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
