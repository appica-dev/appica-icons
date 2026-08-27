<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2.25c3.83 0 6.75 4.428 6.75 9.75s-2.92 9.75-6.75 9.75c-3.76 0-6.644-4.27-6.747-9.46L5.25 12l.003-.29C5.356 6.52 8.239 2.25 12 2.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
